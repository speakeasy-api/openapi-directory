import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1PhysicalSchemaAvroSchema } from "./googleclouddatacatalogv1physicalschemaavroschema";
import { GoogleCloudDatacatalogV1PhysicalSchemaProtobufSchema } from "./googleclouddatacatalogv1physicalschemaprotobufschema";
import { GoogleCloudDatacatalogV1PhysicalSchemaThriftSchema } from "./googleclouddatacatalogv1physicalschemathriftschema";
/**
 * Native schema used by a resource represented as an entry. Used by query engines for deserializing and parsing source data.
 */
export declare class GoogleCloudDatacatalogV1PhysicalSchema extends SpeakeasyBase {
    /**
     * Schema in Avro JSON format.
     */
    avro?: GoogleCloudDatacatalogV1PhysicalSchemaAvroSchema;
    /**
     * Marks a CSV-encoded data source.
     */
    csv?: Record<string, any>;
    /**
     * Marks an ORC-encoded data source.
     */
    orc?: Record<string, any>;
    /**
     * Marks a Parquet-encoded data source.
     */
    parquet?: Record<string, any>;
    /**
     * Schema in protocol buffer format.
     */
    protobuf?: GoogleCloudDatacatalogV1PhysicalSchemaProtobufSchema;
    /**
     * Schema in Thrift format.
     */
    thrift?: GoogleCloudDatacatalogV1PhysicalSchemaThriftSchema;
}
