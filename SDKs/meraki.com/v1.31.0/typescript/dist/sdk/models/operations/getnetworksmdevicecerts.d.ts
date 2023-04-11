import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkSmDeviceCertsRequest extends SpeakeasyBase {
    deviceId: string;
    networkId: string;
}
export declare class GetNetworkSmDeviceCerts200ApplicationJSON extends SpeakeasyBase {
    /**
     * The PEM of the certificate.
     */
    certPem?: string;
    /**
     * The Meraki managed device Id.
     */
    deviceId?: string;
    /**
     * The Meraki Id of the certificate record.
     */
    id?: string;
    /**
     * The certificate issuer.
     */
    issuer?: string;
    /**
     * The name of the certificate.
     */
    name?: string;
    /**
     * The date after which the certificate is no longer valid.
     */
    notValidAfter?: string;
    /**
     * The date before which the certificate is not valid.
     */
    notValidBefore?: string;
    /**
     * The subject of the certificate.
     */
    subject?: string;
}
export declare class GetNetworkSmDeviceCertsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkSmDeviceCerts200ApplicationJSONObjects?: GetNetworkSmDeviceCerts200ApplicationJSON[];
}
