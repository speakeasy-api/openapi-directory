import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class LandlordControllerCreateMaintenancePreferencePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=shortName" })
  shortName: string;
}


export class LandlordControllerCreateMaintenancePreferenceQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=notes" })
  notes: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tenancyID" })
  tenancyID: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=token" })
  token: string;
}


export class LandlordControllerCreateMaintenancePreferenceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: LandlordControllerCreateMaintenancePreferencePathParams;

  @SpeakeasyMetadata()
  queryParams: LandlordControllerCreateMaintenancePreferenceQueryParams;
}


export class LandlordControllerCreateMaintenancePreferenceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  landlordControllerCreateMaintenancePreference200ApplicationJSONString?: string;

  @SpeakeasyMetadata()
  landlordControllerCreateMaintenancePreference200ApplicationXMLString?: string;

  @SpeakeasyMetadata()
  landlordControllerCreateMaintenancePreference200TextJSONString?: string;

  @SpeakeasyMetadata()
  landlordControllerCreateMaintenancePreference200TextXMLString?: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
