import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PreprintsPartialUpdateRequest extends SpeakeasyBase {
    requestBody: Record<string, any>;
    /**
     * The unique identifier of the preprint.
     */
    preprintId: string;
}
export declare class PreprintsPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
