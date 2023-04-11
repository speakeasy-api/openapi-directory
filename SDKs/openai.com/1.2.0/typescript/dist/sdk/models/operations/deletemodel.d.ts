import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteModelRequest extends SpeakeasyBase {
    /**
     * The model to delete
     */
    model: string;
}
export declare class DeleteModelResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    deleteModelResponse?: shared.DeleteModelResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
