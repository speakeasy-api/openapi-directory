import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteSetupV1ResourcesIdDeleteimageRequest extends SpeakeasyBase {
    /**
     * id of resource object
     */
    id: string;
}
export declare class DeleteSetupV1ResourcesIdDeleteimageResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    resourceViewModel?: shared.ResourceViewModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
