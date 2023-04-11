import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteSetupV1ServicesBlockIdRequest extends SpeakeasyBase {
    /**
     * id of serviceBlock object
     */
    id: string;
}
export declare class DeleteSetupV1ServicesBlockIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    resourceBlockViewModel?: shared.ResourceBlockViewModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
