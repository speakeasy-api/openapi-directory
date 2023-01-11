import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetTicketsTypeEnum {
    ARecord = "A_RECORD",
    ChildAbuse = "CHILD_ABUSE",
    Content = "CONTENT",
    FraudWire = "FRAUD_WIRE",
    IpBlock = "IP_BLOCK",
    Malware = "MALWARE",
    NetworkAbuse = "NETWORK_ABUSE",
    Phishing = "PHISHING",
    Spam = "SPAM"
}


export class GetTicketsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=closed" })
  closed?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdEnd" })
  createdEnd?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdStart" })
  createdStart?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sourceDomainOrIp" })
  sourceDomainOrIp?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=target" })
  target?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: GetTicketsTypeEnum;
}


export class GetTicketsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetTicketsQueryParams;
}


export class GetTicketsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
