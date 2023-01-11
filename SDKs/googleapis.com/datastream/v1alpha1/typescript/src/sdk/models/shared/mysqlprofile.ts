import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MysqlSslConfig } from "./mysqlsslconfig";
import { MysqlSslConfigInput } from "./mysqlsslconfig";



// MysqlProfile
/** 
 * MySQL database profile.
**/
export class MysqlProfile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hostname" })
  hostname?: string;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=port" })
  port?: number;

  @SpeakeasyMetadata({ data: "json, name=sslConfig" })
  sslConfig?: MysqlSslConfig;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;
}


// MysqlProfileInput
/** 
 * MySQL database profile.
**/
export class MysqlProfileInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hostname" })
  hostname?: string;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=port" })
  port?: number;

  @SpeakeasyMetadata({ data: "json, name=sslConfig" })
  sslConfig?: MysqlSslConfigInput;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;
}
