import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteSetupV1ResourcesBlockIdRequest extends SpeakeasyBase {
    /**
     * id of resourceBlock object
     */
    id: string;
}
export declare class DeleteSetupV1ResourcesBlockIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    resourceBlockViewModel?: shared.ResourceBlockViewModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
