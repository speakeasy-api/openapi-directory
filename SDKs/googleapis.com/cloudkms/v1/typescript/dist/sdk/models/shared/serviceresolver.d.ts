import { SpeakeasyBase } from "../../../internal/utils";
import { Certificate, CertificateInput } from "./certificate";
/**
 * A ServiceResolver represents an EKM replica that can be reached within an EkmConnection.
 */
export declare class ServiceResolver extends SpeakeasyBase {
    /**
     * Optional. The filter applied to the endpoints of the resolved service. If no filter is specified, all endpoints will be considered. An endpoint will be chosen arbitrarily from the filtered list for each request. For endpoint filter syntax and examples, see https://cloud.google.com/service-directory/docs/reference/rpc/google.cloud.servicedirectory.v1#resolveservicerequest.
     */
    endpointFilter?: string;
    /**
     * Required. The hostname of the EKM replica used at TLS and HTTP layers.
     */
    hostname?: string;
    /**
     * Required. A list of leaf server certificates used to authenticate HTTPS connections to the EKM replica. Currently, a maximum of 10 Certificate is supported.
     */
    serverCertificates?: Certificate[];
    /**
     * Required. The resource name of the Service Directory service pointing to an EKM replica, in the format `projects/* /locations/* /namespaces/* /services/*`.
     */
    serviceDirectoryService?: string;
}
/**
 * A ServiceResolver represents an EKM replica that can be reached within an EkmConnection.
 */
export declare class ServiceResolverInput extends SpeakeasyBase {
    /**
     * Optional. The filter applied to the endpoints of the resolved service. If no filter is specified, all endpoints will be considered. An endpoint will be chosen arbitrarily from the filtered list for each request. For endpoint filter syntax and examples, see https://cloud.google.com/service-directory/docs/reference/rpc/google.cloud.servicedirectory.v1#resolveservicerequest.
     */
    endpointFilter?: string;
    /**
     * Required. The hostname of the EKM replica used at TLS and HTTP layers.
     */
    hostname?: string;
    /**
     * Required. A list of leaf server certificates used to authenticate HTTPS connections to the EKM replica. Currently, a maximum of 10 Certificate is supported.
     */
    serverCertificates?: CertificateInput[];
    /**
     * Required. The resource name of the Service Directory service pointing to an EKM replica, in the format `projects/* /locations/* /namespaces/* /services/*`.
     */
    serviceDirectoryService?: string;
}
