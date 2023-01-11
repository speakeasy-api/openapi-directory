import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IpamPrefixesAvailableIpsCreatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class IpamPrefixesAvailableIpsCreateRequest extends SpeakeasyBase {
    pathParams: IpamPrefixesAvailableIpsCreatePathParams;
}
export declare class IpamPrefixesAvailableIpsCreateResponse extends SpeakeasyBase {
    availableIPS?: shared.AvailableIp[];
    contentType: string;
    statusCode: number;
}
