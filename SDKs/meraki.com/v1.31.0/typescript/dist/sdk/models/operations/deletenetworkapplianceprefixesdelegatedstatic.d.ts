import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteNetworkAppliancePrefixesDelegatedStaticRequest extends SpeakeasyBase {
    networkId: string;
    staticDelegatedPrefixId: string;
}
export declare class DeleteNetworkAppliancePrefixesDelegatedStaticResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
