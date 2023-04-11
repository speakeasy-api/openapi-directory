import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutSetupV1ResourcesBlockIdRequest extends SpeakeasyBase {
    /**
     * Resource Block update model
     */
    resourceBlockUpdateModel?: shared.ResourceBlockUpdateModel;
    /**
     * id of resourceBlock object
     */
    id: string;
}
export declare class PutSetupV1ResourcesBlockIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    resourceBlockViewModel?: shared.ResourceBlockViewModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
