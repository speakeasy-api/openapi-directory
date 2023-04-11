import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteSetupV1ResourcesIdRequest extends SpeakeasyBase {
    /**
     * id of resource object
     */
    id: string;
}
export declare class DeleteSetupV1ResourcesIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    resourceViewModel?: shared.ResourceViewModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
