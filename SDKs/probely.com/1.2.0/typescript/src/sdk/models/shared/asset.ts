import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChangedBy } from "./changedby";
import { Cookies } from "./cookies";
import { Headers } from "./headers";
import { VerificationMethodEnum } from "./verificationmethodenum";



// Asset
/** 
 * Secondary domain of a target
**/
export class Asset extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=changed" })
  changed?: Date;

  @SpeakeasyMetadata({ data: "json, name=changed_by" })
  changedBy?: ChangedBy;

  @SpeakeasyMetadata({ data: "json, name=cookies", elemType: Cookies })
  cookies?: Cookies[];

  @SpeakeasyMetadata({ data: "json, name=desc" })
  desc?: string;

  @SpeakeasyMetadata({ data: "json, name=headers", elemType: Headers })
  headers?: Headers[];

  @SpeakeasyMetadata({ data: "json, name=host" })
  host?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=include" })
  include?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=stack" })
  stack?: string[];

  @SpeakeasyMetadata({ data: "json, name=verification_date" })
  verificationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=verification_last_error" })
  verificationLastError?: string;

  @SpeakeasyMetadata({ data: "json, name=verification_method" })
  verificationMethod?: VerificationMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=verification_token" })
  verificationToken?: string;

  @SpeakeasyMetadata({ data: "json, name=verified" })
  verified?: boolean;
}


// AssetInput
/** 
 * Secondary domain of a target
**/
export class AssetInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cookies", elemType: Cookies })
  cookies?: Cookies[];

  @SpeakeasyMetadata({ data: "json, name=desc" })
  desc?: string;

  @SpeakeasyMetadata({ data: "json, name=headers", elemType: Headers })
  headers?: Headers[];

  @SpeakeasyMetadata({ data: "json, name=host" })
  host?: string;

  @SpeakeasyMetadata({ data: "json, name=include" })
  include?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
