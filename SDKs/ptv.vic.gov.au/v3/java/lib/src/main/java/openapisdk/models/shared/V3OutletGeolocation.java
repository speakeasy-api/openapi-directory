package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class V3OutletGeolocation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outlet_business")
    public String outletBusiness;
    public V3OutletGeolocation withOutletBusiness(String outletBusiness) {
        this.outletBusiness = outletBusiness;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outlet_business_hour_fri")
    public String outletBusinessHourFri;
    public V3OutletGeolocation withOutletBusinessHourFri(String outletBusinessHourFri) {
        this.outletBusinessHourFri = outletBusinessHourFri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outlet_business_hour_mon")
    public String outletBusinessHourMon;
    public V3OutletGeolocation withOutletBusinessHourMon(String outletBusinessHourMon) {
        this.outletBusinessHourMon = outletBusinessHourMon;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outlet_business_hour_sat")
    public String outletBusinessHourSat;
    public V3OutletGeolocation withOutletBusinessHourSat(String outletBusinessHourSat) {
        this.outletBusinessHourSat = outletBusinessHourSat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outlet_business_hour_sun")
    public String outletBusinessHourSun;
    public V3OutletGeolocation withOutletBusinessHourSun(String outletBusinessHourSun) {
        this.outletBusinessHourSun = outletBusinessHourSun;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outlet_business_hour_thur")
    public String outletBusinessHourThur;
    public V3OutletGeolocation withOutletBusinessHourThur(String outletBusinessHourThur) {
        this.outletBusinessHourThur = outletBusinessHourThur;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outlet_business_hour_tue")
    public String outletBusinessHourTue;
    public V3OutletGeolocation withOutletBusinessHourTue(String outletBusinessHourTue) {
        this.outletBusinessHourTue = outletBusinessHourTue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outlet_business_hour_wed")
    public String outletBusinessHourWed;
    public V3OutletGeolocation withOutletBusinessHourWed(String outletBusinessHourWed) {
        this.outletBusinessHourWed = outletBusinessHourWed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outlet_distance")
    public Float outletDistance;
    public V3OutletGeolocation withOutletDistance(Float outletDistance) {
        this.outletDistance = outletDistance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outlet_latitude")
    public Float outletLatitude;
    public V3OutletGeolocation withOutletLatitude(Float outletLatitude) {
        this.outletLatitude = outletLatitude;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outlet_longitude")
    public Float outletLongitude;
    public V3OutletGeolocation withOutletLongitude(Float outletLongitude) {
        this.outletLongitude = outletLongitude;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outlet_name")
    public String outletName;
    public V3OutletGeolocation withOutletName(String outletName) {
        this.outletName = outletName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outlet_notes")
    public String outletNotes;
    public V3OutletGeolocation withOutletNotes(String outletNotes) {
        this.outletNotes = outletNotes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outlet_postcode")
    public Integer outletPostcode;
    public V3OutletGeolocation withOutletPostcode(Integer outletPostcode) {
        this.outletPostcode = outletPostcode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outlet_slid_spid")
    public String outletSlidSpid;
    public V3OutletGeolocation withOutletSlidSpid(String outletSlidSpid) {
        this.outletSlidSpid = outletSlidSpid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outlet_suburb")
    public String outletSuburb;
    public V3OutletGeolocation withOutletSuburb(String outletSuburb) {
        this.outletSuburb = outletSuburb;
        return this;
    }
}