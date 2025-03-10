// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"bytes"
	"encoding/json"
	"errors"
)

type UpdateCarrierSettingsRequestBodyType string

const (
	UpdateCarrierSettingsRequestBodyTypeUpdateDhlExpressSettingsRequestBody UpdateCarrierSettingsRequestBodyType = "update_dhl_express_settings_request_body"
	UpdateCarrierSettingsRequestBodyTypeUpdateFedexSettingsRequestBody      UpdateCarrierSettingsRequestBodyType = "update_fedex_settings_request_body"
	UpdateCarrierSettingsRequestBodyTypeUpdateNewgisticsSettingsRequestBody UpdateCarrierSettingsRequestBodyType = "update_newgistics_settings_request_body"
	UpdateCarrierSettingsRequestBodyTypeUpdateUpsSettingsRequestBody        UpdateCarrierSettingsRequestBodyType = "update_ups_settings_request_body"
	UpdateCarrierSettingsRequestBodyTypeUpdateAmazonBuyShippingRequestBody  UpdateCarrierSettingsRequestBodyType = "update_amazon_buy_shipping_request_body"
)

type UpdateCarrierSettingsRequestBody struct {
	UpdateDhlExpressSettingsRequestBody *UpdateDhlExpressSettingsRequestBody
	UpdateFedexSettingsRequestBody      *UpdateFedexSettingsRequestBody
	UpdateNewgisticsSettingsRequestBody *UpdateNewgisticsSettingsRequestBody
	UpdateUpsSettingsRequestBody        *UpdateUpsSettingsRequestBody
	UpdateAmazonBuyShippingRequestBody  *UpdateAmazonBuyShippingRequestBody

	Type UpdateCarrierSettingsRequestBodyType
}

func CreateUpdateCarrierSettingsRequestBodyUpdateDhlExpressSettingsRequestBody(updateDhlExpressSettingsRequestBody UpdateDhlExpressSettingsRequestBody) UpdateCarrierSettingsRequestBody {
	typ := UpdateCarrierSettingsRequestBodyTypeUpdateDhlExpressSettingsRequestBody

	return UpdateCarrierSettingsRequestBody{
		UpdateDhlExpressSettingsRequestBody: &updateDhlExpressSettingsRequestBody,
		Type:                                typ,
	}
}

func CreateUpdateCarrierSettingsRequestBodyUpdateFedexSettingsRequestBody(updateFedexSettingsRequestBody UpdateFedexSettingsRequestBody) UpdateCarrierSettingsRequestBody {
	typ := UpdateCarrierSettingsRequestBodyTypeUpdateFedexSettingsRequestBody

	return UpdateCarrierSettingsRequestBody{
		UpdateFedexSettingsRequestBody: &updateFedexSettingsRequestBody,
		Type:                           typ,
	}
}

func CreateUpdateCarrierSettingsRequestBodyUpdateNewgisticsSettingsRequestBody(updateNewgisticsSettingsRequestBody UpdateNewgisticsSettingsRequestBody) UpdateCarrierSettingsRequestBody {
	typ := UpdateCarrierSettingsRequestBodyTypeUpdateNewgisticsSettingsRequestBody

	return UpdateCarrierSettingsRequestBody{
		UpdateNewgisticsSettingsRequestBody: &updateNewgisticsSettingsRequestBody,
		Type:                                typ,
	}
}

func CreateUpdateCarrierSettingsRequestBodyUpdateUpsSettingsRequestBody(updateUpsSettingsRequestBody UpdateUpsSettingsRequestBody) UpdateCarrierSettingsRequestBody {
	typ := UpdateCarrierSettingsRequestBodyTypeUpdateUpsSettingsRequestBody

	return UpdateCarrierSettingsRequestBody{
		UpdateUpsSettingsRequestBody: &updateUpsSettingsRequestBody,
		Type:                         typ,
	}
}

func CreateUpdateCarrierSettingsRequestBodyUpdateAmazonBuyShippingRequestBody(updateAmazonBuyShippingRequestBody UpdateAmazonBuyShippingRequestBody) UpdateCarrierSettingsRequestBody {
	typ := UpdateCarrierSettingsRequestBodyTypeUpdateAmazonBuyShippingRequestBody

	return UpdateCarrierSettingsRequestBody{
		UpdateAmazonBuyShippingRequestBody: &updateAmazonBuyShippingRequestBody,
		Type:                               typ,
	}
}

func (u *UpdateCarrierSettingsRequestBody) UnmarshalJSON(data []byte) error {
	var d *json.Decoder

	updateDhlExpressSettingsRequestBody := new(UpdateDhlExpressSettingsRequestBody)
	d = json.NewDecoder(bytes.NewReader(data))
	d.DisallowUnknownFields()
	if err := d.Decode(&updateDhlExpressSettingsRequestBody); err == nil {
		u.UpdateDhlExpressSettingsRequestBody = updateDhlExpressSettingsRequestBody
		u.Type = UpdateCarrierSettingsRequestBodyTypeUpdateDhlExpressSettingsRequestBody
		return nil
	}

	updateFedexSettingsRequestBody := new(UpdateFedexSettingsRequestBody)
	d = json.NewDecoder(bytes.NewReader(data))
	d.DisallowUnknownFields()
	if err := d.Decode(&updateFedexSettingsRequestBody); err == nil {
		u.UpdateFedexSettingsRequestBody = updateFedexSettingsRequestBody
		u.Type = UpdateCarrierSettingsRequestBodyTypeUpdateFedexSettingsRequestBody
		return nil
	}

	updateNewgisticsSettingsRequestBody := new(UpdateNewgisticsSettingsRequestBody)
	d = json.NewDecoder(bytes.NewReader(data))
	d.DisallowUnknownFields()
	if err := d.Decode(&updateNewgisticsSettingsRequestBody); err == nil {
		u.UpdateNewgisticsSettingsRequestBody = updateNewgisticsSettingsRequestBody
		u.Type = UpdateCarrierSettingsRequestBodyTypeUpdateNewgisticsSettingsRequestBody
		return nil
	}

	updateUpsSettingsRequestBody := new(UpdateUpsSettingsRequestBody)
	d = json.NewDecoder(bytes.NewReader(data))
	d.DisallowUnknownFields()
	if err := d.Decode(&updateUpsSettingsRequestBody); err == nil {
		u.UpdateUpsSettingsRequestBody = updateUpsSettingsRequestBody
		u.Type = UpdateCarrierSettingsRequestBodyTypeUpdateUpsSettingsRequestBody
		return nil
	}

	updateAmazonBuyShippingRequestBody := new(UpdateAmazonBuyShippingRequestBody)
	d = json.NewDecoder(bytes.NewReader(data))
	d.DisallowUnknownFields()
	if err := d.Decode(&updateAmazonBuyShippingRequestBody); err == nil {
		u.UpdateAmazonBuyShippingRequestBody = updateAmazonBuyShippingRequestBody
		u.Type = UpdateCarrierSettingsRequestBodyTypeUpdateAmazonBuyShippingRequestBody
		return nil
	}

	return errors.New("could not unmarshal into supported union types")
}

func (u UpdateCarrierSettingsRequestBody) MarshalJSON() ([]byte, error) {
	if u.UpdateDhlExpressSettingsRequestBody != nil {
		return json.Marshal(u.UpdateDhlExpressSettingsRequestBody)
	}

	if u.UpdateFedexSettingsRequestBody != nil {
		return json.Marshal(u.UpdateFedexSettingsRequestBody)
	}

	if u.UpdateNewgisticsSettingsRequestBody != nil {
		return json.Marshal(u.UpdateNewgisticsSettingsRequestBody)
	}

	if u.UpdateUpsSettingsRequestBody != nil {
		return json.Marshal(u.UpdateUpsSettingsRequestBody)
	}

	if u.UpdateAmazonBuyShippingRequestBody != nil {
		return json.Marshal(u.UpdateAmazonBuyShippingRequestBody)
	}

	return nil, nil
}
