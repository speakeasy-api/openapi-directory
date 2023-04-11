import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostSetupV1ResourcesIdBlockRequest extends SpeakeasyBase {
    resourceBlockInputModel?: shared.ResourceBlockInputModel;
    /**
     * id of resource object
     */
    id: string;
}
export declare class PostSetupV1ResourcesIdBlockResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    resourceBlockViewModel?: shared.ResourceBlockViewModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
