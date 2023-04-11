import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutCourseMappingsOfferingIdExternalCourseIdRequest extends SpeakeasyBase {
    /**
     * external course's id
     */
    externalCourseId: string;
    /**
     * offering's id
     */
    offeringId: string;
}
export declare class PutCourseMappingsOfferingIdExternalCourseIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * No authorization token was found.
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Course Mapping
     */
    putCourseMappingsOfferingIdExternalCourseId200ApplicationJSONStrings?: string[];
}
