import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Optional type for the tag.
 */
export declare enum CreateTagTypeEnum {
    Regular = "Regular",
    Negative = "Negative"
}
export declare class CreateTagRequest extends SpeakeasyBase {
    /**
     * API key.
     */
    trainingKey: string;
    /**
     * Optional description for the tag.
     */
    description?: string;
    /**
     * The tag name.
     */
    name: string;
    /**
     * The project id.
     */
    projectId: string;
    /**
     * Optional type for the tag.
     */
    type?: CreateTagTypeEnum;
}
export declare class CreateTagResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * Error response
     */
    customVisionError?: shared.CustomVisionError;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    tag?: shared.Tag;
}
