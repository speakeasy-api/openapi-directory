import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectionProfileInput } from "./connectionprofile";
import { MysqlRdbms } from "./mysqlrdbms";
import { OracleRdbms } from "./oraclerdbms";
/**
 * Request message for 'discover' ConnectionProfile request.
 */
export declare class DiscoverConnectionProfileRequestInput extends SpeakeasyBase {
    connectionProfile?: ConnectionProfileInput;
    /**
     * A reference to an existing ConnectionProfile.
     */
    connectionProfileName?: string;
    /**
     * MySQL database structure
     */
    mysqlRdbms?: MysqlRdbms;
    /**
     * Oracle database structure.
     */
    oracleRdbms?: OracleRdbms;
    /**
     * The number of hierarchy levels below the current level to be retrieved.
     */
    recursionDepth?: number;
    /**
     * Whether to retrieve the full hierarchy of data objects (TRUE) or only the current level (FALSE).
     */
    recursive?: boolean;
}
