import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Oral Questions where the question type is the selected type, substantive or topical.
 */
export declare enum PublishedOralQuestionGetParametersQuestionTypeEnum {
    Substantive = "Substantive",
    Topical = "Topical"
}
export declare class PublishedOralQuestionGetRequest extends SpeakeasyBase {
    /**
     * Which answering body is to respond. A list of answering bodies can be found <a target="_blank" href="http://data.parliament.uk/membersdataplatform/services/mnis/referencedata/AnsweringBodies/">here</a>.
     */
    parametersAnsweringBodyIds?: number[];
    /**
     * Oral Questions where the answering date has been set on or before the date provided. Date format YYYY-MM-DD.
     */
    parametersAnsweringDateEnd?: Date;
    /**
     * Oral Questions where the answering date has been set on or after the date provided. Date format YYYY-MM-DD.
     */
    parametersAnsweringDateStart?: Date;
    /**
     * The ID of the member asking the question. Lists of member IDs for each house are available <a href="http://data.parliament.uk/membersdataplatform/services/mnis/members/query/house=Commons" target="_blank">Commons</a> and <a href="http://data.parliament.uk/membersdataplatform/services/mnis/members/query/house=Lords" target="_blank">Lords</a>.
     */
    parametersAskingMemberIds?: number[];
    /**
     * Oral Questions where the question is within the question time with the ID provided
     */
    parametersOralQuestionTimeId?: number;
    /**
     * Oral Questions where the question type is the selected type, substantive or topical.
     */
    parametersQuestionType?: PublishedOralQuestionGetParametersQuestionTypeEnum;
    /**
     * The number of records to skip from the first, default is 0.
     */
    parametersSkip?: number;
    /**
     * The number of records to return, default is 25, maximum is 100.
     */
    parametersTake?: number;
    /**
     * The UIN for the question - note that UINs reset at the start of each Parliamentary session.
     */
    parametersUINs?: number[];
}
export declare class PublishedOralQuestionGetResponse extends SpeakeasyBase {
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
