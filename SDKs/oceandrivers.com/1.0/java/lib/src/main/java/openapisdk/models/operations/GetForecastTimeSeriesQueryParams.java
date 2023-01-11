package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetForecastTimeSeriesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=days")
    public Integer days;
    public GetForecastTimeSeriesQueryParams withDays(Integer days) {
        this.days = days;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=endtime")
    public String endtime;
    public GetForecastTimeSeriesQueryParams withEndtime(String endtime) {
        this.endtime = endtime;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=entryid")
    public String entryid;
    public GetForecastTimeSeriesQueryParams withEntryid(String entryid) {
        this.entryid = entryid;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=hours")
    public Integer hours;
    public GetForecastTimeSeriesQueryParams withHours(Integer hours) {
        this.hours = hours;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=inittime")
    public String inittime;
    public GetForecastTimeSeriesQueryParams withInittime(String inittime) {
        this.inittime = inittime;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=wave")
    public String wave;
    public GetForecastTimeSeriesQueryParams withWave(String wave) {
        this.wave = wave;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=weather")
    public String weather;
    public GetForecastTimeSeriesQueryParams withWeather(String weather) {
        this.weather = weather;
        return this;
    }
}