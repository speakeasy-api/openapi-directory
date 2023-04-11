import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The request sent to the `SearchOrganizations` method.
 */
export declare class SearchOrganizationsRequest extends SpeakeasyBase {
    /**
     * An optional query string used to filter the Organizations to return in the response. Filter rules are case-insensitive. Organizations may be filtered by `owner.directoryCustomerId` or by `domain`, where the domain is a G Suite domain, for example: * Filter `owner.directorycustomerid:123456789` returns Organization resources with `owner.directory_customer_id` equal to `123456789`. * Filter `domain:google.com` returns Organization resources corresponding to the domain `google.com`. This field is optional.
     */
    filter?: string;
    /**
     * The maximum number of Organizations to return in the response. The server can return fewer organizations than requested. If unspecified, server picks an appropriate default.
     */
    pageSize?: number;
    /**
     * A pagination token returned from a previous call to `SearchOrganizations` that indicates from where listing should continue. This field is optional.
     */
    pageToken?: string;
}
