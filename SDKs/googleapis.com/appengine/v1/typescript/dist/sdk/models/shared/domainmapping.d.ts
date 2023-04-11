import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceRecord } from "./resourcerecord";
import { SslSettings } from "./sslsettings";
/**
 * A domain serving an App Engine application.
 */
export declare class DomainMapping extends SpeakeasyBase {
    /**
     * Relative name of the domain serving the application. Example: example.com.
     */
    id?: string;
    /**
     * Full path to the DomainMapping resource in the API. Example: apps/myapp/domainMapping/example.com.@OutputOnly
     */
    name?: string;
    /**
     * The resource records required to configure this domain mapping. These records must be added to the domain's DNS configuration in order to serve the application via this domain mapping.@OutputOnly
     */
    resourceRecords?: ResourceRecord[];
    /**
     * SSL configuration for a DomainMapping resource.
     */
    sslSettings?: SslSettings;
}
