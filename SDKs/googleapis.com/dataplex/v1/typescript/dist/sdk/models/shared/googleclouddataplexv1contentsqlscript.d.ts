import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Required. Query Engine to be used for the Sql Query.
 */
export declare enum GoogleCloudDataplexV1ContentSqlScriptEngineEnum {
    QueryEngineUnspecified = "QUERY_ENGINE_UNSPECIFIED",
    Spark = "SPARK"
}
/**
 * Configuration for the Sql Script content.
 */
export declare class GoogleCloudDataplexV1ContentSqlScript extends SpeakeasyBase {
    /**
     * Required. Query Engine to be used for the Sql Query.
     */
    engine?: GoogleCloudDataplexV1ContentSqlScriptEngineEnum;
}
