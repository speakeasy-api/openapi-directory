import { SpeakeasyBase } from "../../../internal/utils";
export declare class ManagedZoneServiceDirectoryConfigNamespace extends SpeakeasyBase {
    /**
     * The time that the namespace backing this zone was deleted; an empty string if it still exists. This is in RFC3339 text format. Output only.
     */
    deletionTime?: string;
    kind?: string;
    /**
     * The fully qualified URL of the namespace associated with the zone. Format must be https://servicedirectory.googleapis.com/v1/projects/{project}/locations/{location}/namespaces/{namespace}
     */
    namespaceUrl?: string;
}
