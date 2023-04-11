import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListDeployedDevicesCertificateServerList: readonly ["https://preview.twilio.com"];
export declare class ListDeployedDevicesCertificateSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListDeployedDevicesCertificateRequest extends SpeakeasyBase {
    /**
     * Filters the resulting list of Certificates by a unique string identifier of an authenticated Device.
     */
    deviceSid?: string;
    fleetSid: string;
    /**
     * The page index. This value is simply for client state.
     */
    page?: number;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /**
     * The page token. This is provided by the API.
     */
    pageToken?: string;
}
export declare class ListDeployedDevicesCertificateListDeployedDevicesCertificateResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
/**
 * OK
 */
export declare class ListDeployedDevicesCertificateListDeployedDevicesCertificateResponse extends SpeakeasyBase {
    certificates?: shared.PreviewDeployedDevicesFleetCertificate[];
    meta?: ListDeployedDevicesCertificateListDeployedDevicesCertificateResponseMeta;
}
export declare class ListDeployedDevicesCertificateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listDeployedDevicesCertificateResponse?: ListDeployedDevicesCertificateListDeployedDevicesCertificateResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
