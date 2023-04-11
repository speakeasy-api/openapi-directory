import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PublishedOralQuestionTimeGetRequest extends SpeakeasyBase {
    /**
     * Which answering body is to respond. A list of answering bodies can be found <a target="_blank" href="http://data.parliament.uk/membersdataplatform/services/mnis/referencedata/AnsweringBodies/">here</a>.
     */
    parametersAnsweringBodyIds?: number[];
    /**
     * Oral Questions Time where the answering date has been set on or before the date provided. Date format YYYY-MM-DD.
     */
    parametersAnsweringDateEnd?: Date;
    /**
     * Oral Questions Time where the answering date has been set on or after the date provided. Date format YYYY-MM-DD.
     */
    parametersAnsweringDateStart?: Date;
    /**
     * Oral Questions Time where the deadline date has been set on or before the date provided. Date format YYYY-MM-DD.
     */
    parametersDeadlineDateEnd?: Date;
    /**
     * Oral Questions Time where the deadline date has been set on or after the date provided. Date format YYYY-MM-DD.
     */
    parametersDeadlineDateStart?: Date;
    /**
     * Identifier of the OQT
     */
    parametersOralQuestionTimeId?: number;
    /**
     * The number of records to skip from the first, default is 0.
     */
    parametersSkip?: number;
    /**
     * The number of records to return, default is 25, maximum is 100.
     */
    parametersTake?: number;
}
export declare class PublishedOralQuestionTimeGetResponse extends SpeakeasyBase {
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
