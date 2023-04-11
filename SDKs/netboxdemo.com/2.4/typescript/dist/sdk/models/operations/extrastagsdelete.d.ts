import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ExtrasTagsDeleteRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this Tag.
     */
    id: number;
}
export declare class ExtrasTagsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
