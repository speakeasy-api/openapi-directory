import { SpeakeasyBase } from "../../../internal/utils";
import { NetworkAttachmentConnectedEndpoint } from "./networkattachmentconnectedendpoint";
export declare enum NetworkAttachmentConnectionPreferenceEnum {
    AcceptAutomatic = "ACCEPT_AUTOMATIC",
    AcceptManual = "ACCEPT_MANUAL",
    Invalid = "INVALID"
}
/**
 * NetworkAttachments A network attachment resource ...
 */
export declare class NetworkAttachment extends SpeakeasyBase {
    /**
     * [Output Only] An array of connections for all the producers connected to this network attachment.
     */
    connectionEndpoints?: NetworkAttachmentConnectedEndpoint[];
    connectionPreference?: NetworkAttachmentConnectionPreferenceEnum;
    /**
     * [Output Only] Creation timestamp in RFC3339 text format.
     */
    creationTimestamp?: string;
    /**
     * An optional description of this resource. Provide this property when you create the resource.
     */
    description?: string;
    /**
     * [Output Only] Fingerprint of this resource. A hash of the contents stored in this object. This field is used in optimistic locking. An up-to-date fingerprint must be provided in order to patch.
     */
    fingerprint?: string;
    /**
     * [Output Only] The unique identifier for the resource type. The server generates this identifier.
     */
    id?: string;
    /**
     * [Output Only] Type of the resource.
     */
    kind?: string;
    /**
     * Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
     */
    name?: string;
    /**
     * [Output Only] The URL of the network which the Network Attachment belongs to.
     */
    network?: string;
    /**
     * Projects that are allowed to connect to this network attachment. The project can be specified using its id or number.
     */
    producerAcceptLists?: string[];
    /**
     * Projects that are not allowed to connect to this network attachment. The project can be specified using its id or number.
     */
    producerRejectLists?: string[];
    /**
     * [Output Only] URL of the region where the network attachment resides. This field applies only to the region resource. You must specify this field as part of the HTTP request URL. It is not settable as a field in the request body.
     */
    region?: string;
    /**
     * [Output Only] Server-defined URL for the resource.
     */
    selfLink?: string;
    /**
     * [Output Only] Server-defined URL for this resource's resource id.
     */
    selfLinkWithId?: string;
    /**
     * An array of URLs where each entry is the URL of a subnet provided by the service consumer to use for endpoints in the producers that connect to this network attachment.
     */
    subnetworks?: string[];
}
