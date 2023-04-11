import { SpeakeasyBase } from "../../../internal/utils";
import { CollectdPayload } from "./collectdpayload";
import { MonitoredResource } from "./monitoredresource";
/**
 * The CreateCollectdTimeSeries request.
 */
export declare class CreateCollectdTimeSeriesRequest extends SpeakeasyBase {
    /**
     * The collectd payloads representing the time series data. You must not include more than a single point for each time series, so no two payloads can have the same values for all of the fields plugin, plugin_instance, type, and type_instance.
     */
    collectdPayloads?: CollectdPayload[];
    /**
     * The version of collectd that collected the data. Example: "5.3.0-192.el6".
     */
    collectdVersion?: string;
    /**
     * An object representing a resource that can be used for monitoring, logging, billing, or other purposes. Examples include virtual machine instances, databases, and storage devices such as disks. The type field identifies a MonitoredResourceDescriptor object that describes the resource's schema. Information in the labels field identifies the actual resource and its attributes according to the schema. For example, a particular Compute Engine VM instance could be represented by the following object, because the MonitoredResourceDescriptor for "gce_instance" has labels "project_id", "instance_id" and "zone": { "type": "gce_instance", "labels": { "project_id": "my-project", "instance_id": "12345678901234", "zone": "us-central1-a" }}
     */
    resource?: MonitoredResource;
}
