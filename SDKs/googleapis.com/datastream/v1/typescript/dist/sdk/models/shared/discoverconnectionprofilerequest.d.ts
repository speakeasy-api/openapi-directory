import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectionProfileInput } from "./connectionprofile";
import { MysqlRdbms } from "./mysqlrdbms";
import { OracleRdbms } from "./oraclerdbms";
import { PostgresqlRdbms } from "./postgresqlrdbms";
/**
 * Request message for 'discover' ConnectionProfile request.
 */
export declare class DiscoverConnectionProfileRequestInput extends SpeakeasyBase {
    /**
     * A set of reusable connection configurations to be used as a source or destination for a stream.
     */
    connectionProfile?: ConnectionProfileInput;
    /**
     * A reference to an existing connection profile.
     */
    connectionProfileName?: string;
    /**
     * Whether to retrieve the full hierarchy of data objects (TRUE) or only the current level (FALSE).
     */
    fullHierarchy?: boolean;
    /**
     * The number of hierarchy levels below the current level to be retrieved.
     */
    hierarchyDepth?: number;
    /**
     * MySQL database structure
     */
    mysqlRdbms?: MysqlRdbms;
    /**
     * Oracle database structure.
     */
    oracleRdbms?: OracleRdbms;
    /**
     * PostgreSQL database structure.
     */
    postgresqlRdbms?: PostgresqlRdbms;
}
