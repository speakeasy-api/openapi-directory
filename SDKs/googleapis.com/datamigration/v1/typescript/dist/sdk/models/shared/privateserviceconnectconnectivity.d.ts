import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Private Service Connect connectivity (https://cloud.google.com/vpc/docs/private-service-connect#benefits-services)
 */
export declare class PrivateServiceConnectConnectivity extends SpeakeasyBase {
    /**
     * Required. A service attachment that exposes a database, and has the following format: projects/{project}/regions/{region}/serviceAttachments/{service_attachment_name}
     */
    serviceAttachment?: string;
}
