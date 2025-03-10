/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { PostgresqlRdbms } from "./postgresqlrdbms";
import { Expose, Type } from "class-transformer";

/**
 * PostgreSQL data source configuration
 */
export class PostgresqlSourceConfig extends SpeakeasyBase {
  /**
   * PostgreSQL database structure.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "excludeObjects" })
  @Type(() => PostgresqlRdbms)
  excludeObjects?: PostgresqlRdbms;

  /**
   * PostgreSQL database structure.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "includeObjects" })
  @Type(() => PostgresqlRdbms)
  includeObjects?: PostgresqlRdbms;

  /**
   * Maximum number of concurrent backfill tasks. The number should be non negative. If not set (or set to 0), the system's default value will be used.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "maxConcurrentBackfillTasks" })
  maxConcurrentBackfillTasks?: number;

  /**
   * Required. The name of the publication that includes the set of all tables that are defined in the stream's include_objects.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "publication" })
  publication?: string;

  /**
   * Required. Immutable. The name of the logical replication slot that's configured with the pgoutput plugin.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "replicationSlot" })
  replicationSlot?: string;
}
