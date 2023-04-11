import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutSetupV1ResourcegroupsIdRecoverRequest extends SpeakeasyBase {
    /**
     * id of resourceGroup object
     */
    id: string;
}
export declare class PutSetupV1ResourcegroupsIdRecoverResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    resourceViewModel?: shared.ResourceViewModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
