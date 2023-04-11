import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Order results by date tabled, title or signature count. Default is date tabled.
 */
export declare enum GetEarlyDayMotionsListParametersOrderByEnum {
    DateTabledAsc = "DateTabledAsc",
    DateTabledDesc = "DateTabledDesc",
    TitleAsc = "TitleAsc",
    TitleDesc = "TitleDesc",
    SignatureCountAsc = "SignatureCountAsc",
    SignatureCountDesc = "SignatureCountDesc"
}
export declare enum GetEarlyDayMotionsListParametersStatusesEnum {
    Published = "Published",
    Withdrawn = "Withdrawn"
}
export declare class GetEarlyDayMotionsListRequest extends SpeakeasyBase {
    /**
     * Early Day Motions where the current status has been set on or before the date provided. Date format YYYY-MM-DD.
     */
    parametersCurrentStatusDateEnd?: Date;
    /**
     * Early Day Motions where the current status has been set on or after the date provided. Date format YYYY-MM-DD.
     */
    parametersCurrentStatusDateStart?: Date;
    /**
     * Early Day Motions with an ID in the list provided.
     */
    parametersEdmIds?: number[];
    /**
     * Include Early Day Motions sponsored by Member specified
     */
    parametersIncludeSponsoredByMember?: boolean;
    /**
     * Early Day Motions which are a prayer against a Negative Statutory Instrument.
     */
    parametersIsPrayer?: boolean;
    /**
     * Return Early Day Motions tabled by Member with ID provided.
     */
    parametersMemberId?: number;
    /**
     * Order results by date tabled, title or signature count. Default is date tabled.
     */
    parametersOrderBy?: GetEarlyDayMotionsListParametersOrderByEnum;
    /**
     * Early Day Motions where the title includes the search term provided.
     */
    parametersSearchTerm?: string;
    /**
     * The number of records to skip from the first, default is 0.
     */
    parametersSkip?: number;
    /**
     * Early Day Motions where current status is in the selected list.
     */
    parametersStatuses?: GetEarlyDayMotionsListParametersStatusesEnum[];
    /**
     * Early Day Motions where the date tabled is on or before the date provided. Date format YYYY-MM-DD.
     */
    parametersTabledEndDate?: Date;
    /**
     * Early Day Motions where the date tabled is on or after the date provided. Date format YYYY-MM-DD.
     */
    parametersTabledStartDate?: Date;
    /**
     * The number of records to return, default is 25, maximum is 100.
     */
    parametersTake?: number;
    /**
     * Early Day Motions with an UINWithAmendmentSuffix provided.
     */
    parametersUINWithAmendmentSuffix?: string;
}
export declare class GetEarlyDayMotionsListResponse extends SpeakeasyBase {
    /**
     * OK
     */
    apiResponseListPublishedWrittenQuestion?: shared.ApiResponseListPublishedWrittenQuestion;
    /**
     * BadRequest
     */
    apiResponseObject?: shared.ApiResponseObject;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
