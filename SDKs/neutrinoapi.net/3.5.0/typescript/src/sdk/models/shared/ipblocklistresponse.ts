import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class IpBlocklistResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=blocklists" })
  blocklists: string[];

  @SpeakeasyMetadata({ data: "json, name=ip" })
  ip: string;

  @SpeakeasyMetadata({ data: "json, name=isBot" })
  isBot: boolean;

  @SpeakeasyMetadata({ data: "json, name=isDshield" })
  isDshield: boolean;

  @SpeakeasyMetadata({ data: "json, name=isExploitBot" })
  isExploitBot: boolean;

  @SpeakeasyMetadata({ data: "json, name=isHijacked" })
  isHijacked: boolean;

  @SpeakeasyMetadata({ data: "json, name=isListed" })
  isListed: boolean;

  @SpeakeasyMetadata({ data: "json, name=isMalware" })
  isMalware: boolean;

  @SpeakeasyMetadata({ data: "json, name=isProxy" })
  isProxy: boolean;

  @SpeakeasyMetadata({ data: "json, name=isSpamBot" })
  isSpamBot: boolean;

  @SpeakeasyMetadata({ data: "json, name=isSpider" })
  isSpider: boolean;

  @SpeakeasyMetadata({ data: "json, name=isSpyware" })
  isSpyware: boolean;

  @SpeakeasyMetadata({ data: "json, name=isTor" })
  isTor: boolean;

  @SpeakeasyMetadata({ data: "json, name=isVpn" })
  isVpn: boolean;

  @SpeakeasyMetadata({ data: "json, name=lastSeen" })
  lastSeen: number;

  @SpeakeasyMetadata({ data: "json, name=listCount" })
  listCount: number;

  @SpeakeasyMetadata({ data: "json, name=sensors" })
  sensors: string[];
}
