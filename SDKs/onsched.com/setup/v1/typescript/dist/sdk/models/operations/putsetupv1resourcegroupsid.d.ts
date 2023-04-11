import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutSetupV1ResourcegroupsIdRequest extends SpeakeasyBase {
    /**
     * Resource Group Update Model
     */
    resourceGroupUpdateModel?: shared.ResourceGroupUpdateModel;
    /**
     * id of resourcGroup object
     */
    id: string;
}
export declare class PutSetupV1ResourcegroupsIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    resourceGroupViewModel?: shared.ResourceGroupViewModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
