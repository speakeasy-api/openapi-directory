import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteSetupV1ResourcegroupsIdRequest extends SpeakeasyBase {
    /**
     * id of resourceGroup object
     */
    id: string;
}
export declare class DeleteSetupV1ResourcegroupsIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    resourceGroupViewModel?: shared.ResourceGroupViewModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
