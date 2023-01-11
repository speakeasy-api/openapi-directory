package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class V3Outlet {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outlet_business")
    public String outletBusiness;
    public V3Outlet withOutletBusiness(String outletBusiness) {
        this.outletBusiness = outletBusiness;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outlet_business_hour_fri")
    public String outletBusinessHourFri;
    public V3Outlet withOutletBusinessHourFri(String outletBusinessHourFri) {
        this.outletBusinessHourFri = outletBusinessHourFri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outlet_business_hour_mon")
    public String outletBusinessHourMon;
    public V3Outlet withOutletBusinessHourMon(String outletBusinessHourMon) {
        this.outletBusinessHourMon = outletBusinessHourMon;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outlet_business_hour_sat")
    public String outletBusinessHourSat;
    public V3Outlet withOutletBusinessHourSat(String outletBusinessHourSat) {
        this.outletBusinessHourSat = outletBusinessHourSat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outlet_business_hour_sun")
    public String outletBusinessHourSun;
    public V3Outlet withOutletBusinessHourSun(String outletBusinessHourSun) {
        this.outletBusinessHourSun = outletBusinessHourSun;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outlet_business_hour_thur")
    public String outletBusinessHourThur;
    public V3Outlet withOutletBusinessHourThur(String outletBusinessHourThur) {
        this.outletBusinessHourThur = outletBusinessHourThur;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outlet_business_hour_tue")
    public String outletBusinessHourTue;
    public V3Outlet withOutletBusinessHourTue(String outletBusinessHourTue) {
        this.outletBusinessHourTue = outletBusinessHourTue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outlet_business_hour_wed")
    public String outletBusinessHourWed;
    public V3Outlet withOutletBusinessHourWed(String outletBusinessHourWed) {
        this.outletBusinessHourWed = outletBusinessHourWed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outlet_latitude")
    public Float outletLatitude;
    public V3Outlet withOutletLatitude(Float outletLatitude) {
        this.outletLatitude = outletLatitude;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outlet_longitude")
    public Float outletLongitude;
    public V3Outlet withOutletLongitude(Float outletLongitude) {
        this.outletLongitude = outletLongitude;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outlet_name")
    public String outletName;
    public V3Outlet withOutletName(String outletName) {
        this.outletName = outletName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outlet_notes")
    public String outletNotes;
    public V3Outlet withOutletNotes(String outletNotes) {
        this.outletNotes = outletNotes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outlet_postcode")
    public Integer outletPostcode;
    public V3Outlet withOutletPostcode(Integer outletPostcode) {
        this.outletPostcode = outletPostcode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outlet_slid_spid")
    public String outletSlidSpid;
    public V3Outlet withOutletSlidSpid(String outletSlidSpid) {
        this.outletSlidSpid = outletSlidSpid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outlet_suburb")
    public String outletSuburb;
    public V3Outlet withOutletSuburb(String outletSuburb) {
        this.outletSuburb = outletSuburb;
        return this;
    }
}