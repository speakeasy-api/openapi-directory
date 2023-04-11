/**
 * Indicates the kind of event that was executed. In most cases it's a verb. I.e. 'connected', 'created' etc...
 */
export declare enum EventTopicActionEnum {
    Created = "created",
    Updated = "updated",
    Deleted = "deleted",
    Disappeared = "disappeared",
    ConnectionRssiChanged = "connection-rssi-changed"
}
