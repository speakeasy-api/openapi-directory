import { SpeakeasyBase } from "../../../internal/utils";
import { BiEngineStatistics } from "./bienginestatistics";
import { BigQueryModelTraining } from "./bigquerymodeltraining";
import { DatasetReference } from "./datasetreference";
import { DmlStatistics } from "./dmlstatistics";
import { ExplainQueryStage } from "./explainquerystage";
import { MlStatistics } from "./mlstatistics";
import { QueryParameter } from "./queryparameter";
import { QueryTimelineSample } from "./querytimelinesample";
import { RoutineReference } from "./routinereference";
import { RowAccessPolicyReference } from "./rowaccesspolicyreference";
import { SearchStatistics } from "./searchstatistics";
import { SparkStatistics } from "./sparkstatistics";
import { TableReference } from "./tablereference";
import { TableSchema } from "./tableschema";
export declare class JobStatistics2ReservationUsage extends SpeakeasyBase {
    /**
     * [Output only] Reservation name or "unreserved" for on-demand resources usage.
     */
    name?: string;
    /**
     * [Output only] Slot-milliseconds the job spent in the given reservation.
     */
    slotMs?: string;
}
export declare class JobStatistics2 extends SpeakeasyBase {
    biEngineStatistics?: BiEngineStatistics;
    /**
     * [Output only] Billing tier for the job.
     */
    billingTier?: number;
    /**
     * [Output only] Whether the query result was fetched from the query cache.
     */
    cacheHit?: boolean;
    /**
     * [Output only] [Preview] The number of row access policies affected by a DDL statement. Present only for DROP ALL ROW ACCESS POLICIES queries.
     */
    ddlAffectedRowAccessPolicyCount?: string;
    ddlDestinationTable?: TableReference;
    /**
     * The DDL operation performed, possibly dependent on the pre-existence of the DDL target. Possible values (new values might be added in the future): "CREATE": The query created the DDL target. "SKIP": No-op. Example cases: the query is CREATE TABLE IF NOT EXISTS while the table already exists, or the query is DROP TABLE IF EXISTS while the table does not exist. "REPLACE": The query replaced the DDL target. Example case: the query is CREATE OR REPLACE TABLE, and the table already exists. "DROP": The query deleted the DDL target.
     */
    ddlOperationPerformed?: string;
    ddlTargetDataset?: DatasetReference;
    ddlTargetRoutine?: RoutineReference;
    ddlTargetRowAccessPolicy?: RowAccessPolicyReference;
    ddlTargetTable?: TableReference;
    dmlStats?: DmlStatistics;
    /**
     * [Output only] The original estimate of bytes processed for the job.
     */
    estimatedBytesProcessed?: string;
    mlStatistics?: MlStatistics;
    modelTraining?: BigQueryModelTraining;
    /**
     * [Output only, Beta] Deprecated; do not use.
     */
    modelTrainingCurrentIteration?: number;
    /**
     * [Output only, Beta] Deprecated; do not use.
     */
    modelTrainingExpectedTotalIteration?: string;
    /**
     * [Output only] The number of rows affected by a DML statement. Present only for DML statements INSERT, UPDATE or DELETE.
     */
    numDmlAffectedRows?: string;
    /**
     * [Output only] Describes execution plan for the query.
     */
    queryPlan?: ExplainQueryStage[];
    /**
     * [Output only] Referenced routines (persistent user-defined functions and stored procedures) for the job.
     */
    referencedRoutines?: RoutineReference[];
    /**
     * [Output only] Referenced tables for the job. Queries that reference more than 50 tables will not have a complete list.
     */
    referencedTables?: TableReference[];
    /**
     * [Output only] Job resource usage breakdown by reservation.
     */
    reservationUsage?: JobStatistics2ReservationUsage[];
    schema?: TableSchema;
    searchStatistics?: SearchStatistics;
    sparkStatistics?: SparkStatistics;
    /**
     * The type of query statement, if valid. Possible values (new values might be added in the future): "SELECT": SELECT query. "INSERT": INSERT query; see https://cloud.google.com/bigquery/docs/reference/standard-sql/data-manipulation-language. "UPDATE": UPDATE query; see https://cloud.google.com/bigquery/docs/reference/standard-sql/data-manipulation-language. "DELETE": DELETE query; see https://cloud.google.com/bigquery/docs/reference/standard-sql/data-manipulation-language. "MERGE": MERGE query; see https://cloud.google.com/bigquery/docs/reference/standard-sql/data-manipulation-language. "ALTER_TABLE": ALTER TABLE query. "ALTER_VIEW": ALTER VIEW query. "ASSERT": ASSERT condition AS 'description'. "CREATE_FUNCTION": CREATE FUNCTION query. "CREATE_MODEL": CREATE [OR REPLACE] MODEL ... AS SELECT ... . "CREATE_PROCEDURE": CREATE PROCEDURE query. "CREATE_TABLE": CREATE [OR REPLACE] TABLE without AS SELECT. "CREATE_TABLE_AS_SELECT": CREATE [OR REPLACE] TABLE ... AS SELECT ... . "CREATE_VIEW": CREATE [OR REPLACE] VIEW ... AS SELECT ... . "DROP_FUNCTION" : DROP FUNCTION query. "DROP_PROCEDURE": DROP PROCEDURE query. "DROP_TABLE": DROP TABLE query. "DROP_VIEW": DROP VIEW query.
     */
    statementType?: string;
    /**
     * [Output only] [Beta] Describes a timeline of job execution.
     */
    timeline?: QueryTimelineSample[];
    /**
     * [Output only] Total bytes billed for the job.
     */
    totalBytesBilled?: string;
    /**
     * [Output only] Total bytes processed for the job.
     */
    totalBytesProcessed?: string;
    /**
     * [Output only] For dry-run jobs, totalBytesProcessed is an estimate and this field specifies the accuracy of the estimate. Possible values can be: UNKNOWN: accuracy of the estimate is unknown. PRECISE: estimate is precise. LOWER_BOUND: estimate is lower bound of what the query would cost. UPPER_BOUND: estimate is upper bound of what the query would cost.
     */
    totalBytesProcessedAccuracy?: string;
    /**
     * [Output only] Total number of partitions processed from all partitioned tables referenced in the job.
     */
    totalPartitionsProcessed?: string;
    /**
     * [Output only] Slot-milliseconds for the job.
     */
    totalSlotMs?: string;
    /**
     * [Output-only] Total bytes transferred for cross-cloud queries such as Cross Cloud Transfer and CREATE TABLE AS SELECT (CTAS).
     */
    transferredBytes?: string;
    /**
     * Standard SQL only: list of undeclared query parameters detected during a dry run validation.
     */
    undeclaredQueryParameters?: QueryParameter[];
}
