import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateTagRequest extends SpeakeasyBase {
    trainingKey: string;
    /**
     * Optional description for the tag
     */
    description?: string;
    /**
     * The tag name
     */
    name: string;
    /**
     * The project id
     */
    projectId: string;
}
export declare class CreateTagResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    tag?: shared.Tag;
}
