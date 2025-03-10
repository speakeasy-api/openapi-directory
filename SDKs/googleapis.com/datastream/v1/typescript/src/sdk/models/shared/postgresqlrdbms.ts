/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { PostgresqlSchema } from "./postgresqlschema";
import { Expose, Type } from "class-transformer";

/**
 * PostgreSQL database structure.
 */
export class PostgresqlRdbms extends SpeakeasyBase {
  /**
   * PostgreSQL schemas in the database server.
   */
  @SpeakeasyMetadata({ elemType: PostgresqlSchema })
  @Expose({ name: "postgresqlSchemas" })
  @Type(() => PostgresqlSchema)
  postgresqlSchemas?: PostgresqlSchema[];
}
