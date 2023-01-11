import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CertificateSitesealGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=certificateId" })
  certificateId: string;
}

export enum CertificateSitesealGetThemeEnum {
    Dark = "DARK",
    Light = "LIGHT"
}


export class CertificateSitesealGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locale" })
  locale?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=theme" })
  theme?: CertificateSitesealGetThemeEnum;
}


export class CertificateSitesealGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CertificateSitesealGetPathParams;

  @SpeakeasyMetadata()
  queryParams: CertificateSitesealGetQueryParams;
}


export class CertificateSitesealGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  certificateSiteSeal?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
