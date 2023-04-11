import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSetupV1ServicesBlocksIdRequest extends SpeakeasyBase {
    /**
     * id of serviceBlock object
     */
    id: string;
}
export declare class GetSetupV1ServicesBlocksIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    resourceBlockViewModel?: shared.ResourceBlockViewModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
