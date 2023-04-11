import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostSetupV1ResourcegroupsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    resourceGroupViewModel?: shared.ResourceGroupViewModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
