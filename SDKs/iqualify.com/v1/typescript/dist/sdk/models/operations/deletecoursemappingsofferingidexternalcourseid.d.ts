import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteCourseMappingsOfferingIdExternalCourseIdRequest extends SpeakeasyBase {
    /**
     * external course's id
     */
    externalCourseId: string;
    /**
     * offering's id
     */
    offeringId: string;
}
export declare class DeleteCourseMappingsOfferingIdExternalCourseIdResponse extends SpeakeasyBase {
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
    deleteCourseMappingsOfferingIdExternalCourseId200ApplicationJSONStrings?: string[];
}
