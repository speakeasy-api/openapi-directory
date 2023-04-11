import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class VirtualizationClusterGroupsCreateResponse extends SpeakeasyBase {
    clusterGroup?: shared.ClusterGroup;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
