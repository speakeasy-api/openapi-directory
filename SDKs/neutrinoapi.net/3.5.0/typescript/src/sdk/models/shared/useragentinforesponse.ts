import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UserAgentInfoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=browserName" })
  browserName: string;

  @SpeakeasyMetadata({ data: "json, name=engine" })
  engine: string;

  @SpeakeasyMetadata({ data: "json, name=engineVersion" })
  engineVersion: string;

  @SpeakeasyMetadata({ data: "json, name=isAndroid" })
  isAndroid: boolean;

  @SpeakeasyMetadata({ data: "json, name=isIos" })
  isIos: boolean;

  @SpeakeasyMetadata({ data: "json, name=isMobile" })
  isMobile: boolean;

  @SpeakeasyMetadata({ data: "json, name=mobileBrand" })
  mobileBrand: string;

  @SpeakeasyMetadata({ data: "json, name=mobileBrowser" })
  mobileBrowser: string;

  @SpeakeasyMetadata({ data: "json, name=mobileModel" })
  mobileModel: string;

  @SpeakeasyMetadata({ data: "json, name=mobileScreenHeight" })
  mobileScreenHeight: number;

  @SpeakeasyMetadata({ data: "json, name=mobileScreenWidth" })
  mobileScreenWidth: number;

  @SpeakeasyMetadata({ data: "json, name=operatingSystem" })
  operatingSystem: string;

  @SpeakeasyMetadata({ data: "json, name=operatingSystemFamily" })
  operatingSystemFamily: string;

  @SpeakeasyMetadata({ data: "json, name=operatingSystemVersion" })
  operatingSystemVersion: string;

  @SpeakeasyMetadata({ data: "json, name=producer" })
  producer: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version: string;
}
