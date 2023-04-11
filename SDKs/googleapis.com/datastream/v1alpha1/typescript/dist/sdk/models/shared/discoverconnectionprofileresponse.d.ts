import { SpeakeasyBase } from "../../../internal/utils";
import { MysqlRdbms } from "./mysqlrdbms";
import { OracleRdbms } from "./oraclerdbms";
/**
 * Successful response
 */
export declare class DiscoverConnectionProfileResponse extends SpeakeasyBase {
    /**
     * MySQL database structure
     */
    mysqlRdbms?: MysqlRdbms;
    /**
     * Oracle database structure.
     */
    oracleRdbms?: OracleRdbms;
}
